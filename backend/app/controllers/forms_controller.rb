class FormsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]


  def create

    email = params[:email_address]
    phone_number = params[:phone_number]

      # Process adults
      adults = params[:adults].map do |adult|
        Passenger.create!(passenger_params(adult, email, phone_number))
      end
  
      # Process children
      children = if params[:children].present?
        params[:children].map do |child|
          Passenger.create!(passenger_params(child, email, phone_number))
        end
      else 
        []
      end

      # Process pets
      if params[:pets].present?
        params[:pets].each_with_index do |pet, index|
            # Assuming the pets belong to the first adult for simplicity
        passenger = adults[index % adults.size]
        Pet.create!(pet_params(pet).merge(passenger_id: passenger.id))
        end
      else 
        []
      end
  
      # Additional logic or response
      render json: { message: "Data processed successfully" }, status: :ok
    
  end

  private
  
    def passenger_params(person, email, phone_number)
      {
        first_name: person[:first_name],
        last_name: person[:last_name],
        gender: person[:gender],
        date_of_birth: Date.new(person[:YYYY].to_i, person[:MM].to_i, person[:DD].to_i),
        passport_number: person[:passport],
        email: email,
        phone_number: phone_number
      }
    end

    def pet_params(pet)
      {
        name: pet[:pet_name],
        gender: pet[:pet_gender],
        species: pet[:species]
      }
    end
end
