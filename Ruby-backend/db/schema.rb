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

ActiveRecord::Schema.define(version: 2023_06_09_152301) do

  create_table "comments", force: :cascade do |t|
    t.string "comment"
    t.integer "new_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["new_id"], name: "index_comments_on_new_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "name", null: false
    t.string "video"
    t.integer "team_id"
    t.integer "league_id"
  end

  create_table "leagues", force: :cascade do |t|
    t.string "name", null: false
    t.string "region", null: false
    t.integer "news_id", null: false
  end

  create_table "news", force: :cascade do |t|
    t.string "title", null: false
    t.string "news"
    t.integer "games_id"
    t.integer "teams_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "likes", default: 0
    t.string "image"
  end

  create_table "schedules", force: :cascade do |t|
    t.datetime "date"
  end

  create_table "sports", force: :cascade do |t|
    t.string "name", null: false
    t.integer "news_id", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.integer "league_id"
    t.string "logo", null: false
    t.string "name", null: false
    t.string "region", null: false
    t.integer "total_points"
    t.integer "field_points"
    t.integer "three_points"
  end

  add_foreign_key "comments", "news", column: "new_id"
end
