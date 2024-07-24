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

ActiveRecord::Schema[7.0].define(version: 2024_07_24_174939) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "aircrafts", force: :cascade do |t|
    t.integer "number_of_seats", null: false
    t.string "aircraft_number", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "flight_passengers", force: :cascade do |t|
    t.bigint "flight_id", null: false
    t.bigint "passenger_id", null: false
    t.bigint "seat_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flight_id", "passenger_id"], name: "index_flight_passengers_on_flight_id_and_passenger_id", unique: true
    t.index ["flight_id"], name: "index_flight_passengers_on_flight_id"
    t.index ["passenger_id"], name: "index_flight_passengers_on_passenger_id"
    t.index ["seat_id"], name: "index_flight_passengers_on_seat_id"
  end

  create_table "flights", force: :cascade do |t|
    t.bigint "aircraft_id", null: false
    t.string "flight_number", null: false
    t.string "pilot_name", null: false
    t.date "departure_date", null: false
    t.time "departure_time", null: false
    t.string "origin_airport", null: false
    t.string "destination_airport", null: false
    t.date "arrival_date", null: false
    t.time "arrival_time", null: false
    t.string "flight_duration", null: false
    t.boolean "wifi_available", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["aircraft_id"], name: "index_flights_on_aircraft_id"
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "passenger_id", null: false
    t.bigint "outbound_flight_id", null: false
    t.bigint "return_flight_id", null: false
    t.decimal "price", precision: 10, scale: 2, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["outbound_flight_id"], name: "index_orders_on_outbound_flight_id"
    t.index ["passenger_id"], name: "index_orders_on_passenger_id"
    t.index ["return_flight_id"], name: "index_orders_on_return_flight_id"
  end

  create_table "passengers", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "passport_number", null: false
    t.date "date_of_birth", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "seats", force: :cascade do |t|
    t.bigint "aircraft_id", null: false
    t.bigint "flight_id", null: false
    t.string "seat_number", null: false
    t.boolean "available", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["aircraft_id"], name: "index_seats_on_aircraft_id"
    t.index ["flight_id"], name: "index_seats_on_flight_id"
  end

  add_foreign_key "flight_passengers", "flights"
  add_foreign_key "flight_passengers", "passengers"
  add_foreign_key "flight_passengers", "seats"
  add_foreign_key "flights", "aircrafts"
  add_foreign_key "orders", "flights", column: "outbound_flight_id"
  add_foreign_key "orders", "flights", column: "return_flight_id"
  add_foreign_key "orders", "passengers"
  add_foreign_key "seats", "aircrafts"
  add_foreign_key "seats", "flights"
end
