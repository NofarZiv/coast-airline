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

ActiveRecord::Schema[7.0].define(version: 2024_08_01_193917) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "aircrafts", force: :cascade do |t|
    t.integer "number_of_seats"
    t.string "aircraft_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "flights", force: :cascade do |t|
    t.bigint "aircraft_id", null: false
    t.string "flight_number"
    t.string "pilot_name"
    t.date "departure_date"
    t.string "departure_terminal"
    t.time "departure_time"
    t.string "origin_airport"
    t.string "destination_airport"
    t.date "arrival_date"
    t.string "arrival_terminal"
    t.time "arrival_time"
    t.integer "flight_duration"
    t.float "flight_price"
    t.boolean "wifi_available"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["aircraft_id"], name: "index_flights_on_aircraft_id"
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "seat_id", null: false
    t.bigint "flight_id", null: false
    t.bigint "passenger_id", null: false
    t.string "flight_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flight_id"], name: "index_orders_on_flight_id"
    t.index ["passenger_id"], name: "index_orders_on_passenger_id"
    t.index ["seat_id"], name: "index_orders_on_seat_id"
  end

  create_table "passengers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "passport_number"
    t.date "date_of_birth"
    t.string "email"
    t.string "phone_number"
    t.string "gender"
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

  create_table "seats", force: :cascade do |t|
    t.bigint "aircraft_id", null: false
    t.string "seat_number"
    t.boolean "available", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["aircraft_id"], name: "index_seats_on_aircraft_id"
  end

  add_foreign_key "flights", "aircrafts"
  add_foreign_key "orders", "flights"
  add_foreign_key "orders", "passengers"
  add_foreign_key "orders", "seats"
  add_foreign_key "pets", "passengers"
  add_foreign_key "seats", "aircrafts"
end
