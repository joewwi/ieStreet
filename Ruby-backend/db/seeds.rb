puts "🌱 Seeding spices..."

require_relative "../config/environment.rb"
# Clear existing data
Game.delete_all
League.delete_all
News.delete_all
Schedule.delete_all
Sport.delete_all
Team.delete_all

# Create sports
sport_names = ['Football', 'Basketball', 'Soccer']
sports = sport_names.map do |name|
  Sport.create!(name: name)
end

# Create leagues
league_names = ['Premier League', 'NBA', 'La Liga']
regions = ['England', 'USA', 'Spain']
leagues = league_names.zip(regions).map do |name, region|
  League.create!(name: name, region: region)
end

# Create teams
teams_data = [
  { name: 'Manchester United', logo: 'manutd_logo.png', region: 'England', league: leagues[0], total_points: 0, field_points: 0, three_points: 0 },
  { name: 'Los Angeles Lakers', logo: 'lakers_logo.png', region: 'USA', league: leagues[1], total_points: 0, field_points: 0, three_points: 0 },
  { name: 'FC Barcelona', logo: 'barcelona_logo.png', region: 'Spain', league: leagues[2], total_points: 0, field_points: 0, three_points: 0 }
]

teams = teams_data.map do |team_data|
  Team.create!(team_data)
end

# Create games
games_data = [
  { name: 'Football Game 1', video: 'football_game1.mp4', team: teams[0], league: leagues[0] },
  { name: 'Basketball Game 1', video: 'basketball_game1.mp4', team: teams[1], league: leagues[1] },
  { name: 'Soccer Game 1', video: 'soccer_game1.mp4', team: teams[2], league: leagues[2] }
]

games = games_data.map do |game_data|
  Game.create!(game_data)
end

# Create news
news_data = [
  { title: 'Football News 1', news: 'Football news content 1', game: games[0], team: teams[0] },
  { title: 'Basketball News 1', news: 'Basketball news content 1', game: games[1], team: teams[1] },
  { title: 'Soccer News 1', news: 'Soccer news content 1', game: games[2], team: teams[2] }
]

News.create!(news_data)

# Create schedules
Schedule.create!(date: DateTime.now)

puts "✅ Done seeding!"
