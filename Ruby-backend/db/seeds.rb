require 'faker'
# Create dummy data for the tables

# Comments
50.times do
  Comment.create!(
    comment: Faker::Lorem.sentence,
    news_id: Faker::Number.between(from: 1, to: 50),
    created_at: Faker::Time.between(from: 1.month.ago, to: Time.current),
    updated_at: Faker::Time.between(from: 1.month.ago, to: Time.current)
  )
end

# Games
20.times do
  Game.create!(
    name: Faker::Game.title,
    video: Faker::Internet.url,
    team_id: Faker::Number.between(from: 1, to: 10),
    league_id: Faker::Number.between(from: 1, to: 5)
  )
end

# Leagues
5.times do
  League.create!(
    name: Faker::Sports::Basketball.unique.team,
    region: Faker::Address.country,
    news_id: Faker::Number.between(from: 1, to: 10)
  )
end

# News
50.times do
  News.create!(
    title: Faker::Lorem.sentence,
    news: Faker::Lorem.paragraph,
    games_id: Faker::Number.between(from: 1, to: 20),
    teams_id: Faker::Number.between(from: 1, to: 15),
    created_at: Faker::Time.between(from: 1.month.ago, to: Time.current),
    updated_at: Faker::Time.between(from: 1.month.ago, to: Time.current),
    likes: Faker::Number.between(from: 0, to: 100),
    image: Faker::LoremPixel.image(size: "300x200", is_gray: false, category: "sports")
  )
end


# Schedules
25.times do
  Schedule.create!(
    date: Faker::Time.between(from: Time.current, to: 1.month.from_now)
  )
end

# Sports
sports_names = []
50.times do
  sports_names << Faker::Sports::Football.name
end

5.times do
  Sport.create!(
    name: sports_names.pop,
    news_id: Faker::Number.between(from: 1, to: 50)
  )
end

# Teams
15.times do
  Team.create!(
    league_id: Faker::Number.between(from: 1, to: 5),
    logo: Faker::Company.logo,
    name: Faker::Sports::Basketball.unique.team,
    region: Faker::Address.state,
    total_points: Faker::Number.between(from: 100, to: 1000),
    field_points: Faker::Number.between(from: 50, to: 500),
    three_points: Faker::Number.between(from: 10, to: 100)
  )
end