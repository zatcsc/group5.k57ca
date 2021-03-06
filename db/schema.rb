# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140516015238) do

  create_table "coordinates", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude"
    t.float    "logitude"
  end

  create_table "jams", force: true do |t|
    t.string   "place"
    t.float    "lat"
    t.float    "lng"
    t.string   "reason"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "provinces", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
    t.string   "remember_token"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["remember_token"], name: "index_users_on_remember_token"

  create_table "weathers", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "day"
    t.float    "min_temperature"
    t.float    "max_temperature"
    t.string   "status"
    t.date     "current_date"
  end

end
