class FormsController < ApplicationController
  def create

    email = params[:email_address]
    phone_number = params[:phone_number]

      # Process adults
      params[:adults].each do |adult|
        Passenger.create!(passenger_params(adult, email, phone_number).merge({ adult: true }))
      end
  
      # Process children
      params[:children].each do |child|
        Passenger.create!(passenger_params(child, email, phone_number).merge({ adult: false }))
      end

      # Process pets
      params[:pets].each do |pet|
        Pet.create!(pet_params(pet))
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
        name: pet[:name],
        gender: pet[:gender]
        species: pet[:species]
      }
    end


  end
end
