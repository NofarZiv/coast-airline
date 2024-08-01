# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_08_01_184613) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "flights", force: :cascade do |t|
    t.string "flight_number", null: false
    t.string "pilot_name", null: false
    t.date "departure_date", null: false
    t.string "departure_terminal", null: false
    t.time "departure_time", null: false
    t.string "origin_airport", null: false
    t.string "destination_airport", null: false
    t.date "arrival_date", null: false
    t.string "arrival_terminal", null: false
    t.time "arrival_time", null: false
    t.integer "flight_duration", null: false
    t.float "flight_price", null: false
    t.boolean "wifi_available", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flight_number"], name: "index_flights_on_flight_number", unique: true
  end

  create_table "passengers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "passport_number"
    t.date "date_of_birth"
    t.string "email"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pets", force: :cascade do |t|
    t.bigint "passenger_id", null: false
    t.string "name"
    t.string "gender"
    t.string "species"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["passenger_id"], name: "index_pets_on_passenger_id"
  end

  add_foreign_key "pets", "passengers"
end
