class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  before do
  end
  
  get "/" do
    "<h1>Frrrrr!!!</h1>".to_json
  end
  get "/leagues/:region" do
    begin
      region = params[:region]
      League.where(region: region).to_json
    rescue => e
      [422, { message: e.message }].to_json
    end
  end
  
  get "/sports" do
    Sport.all.to_json
  end
  
  get "/sport/:id/teams" do
    id = params[:id].to_i
    sport = Sport.find(id)
    sport.teams.to_json
  end
  
  get "/news" do
    News.all.to_json
  end
  
  get "/news/trending" do
    News.first.to_json
  end

  get "/news/comments/:id"do
    begin
      Comments.find_by(news_id: params['id']).to_json
    rescue => e
      [422, {message: e.message}].to_json
    end
  end

  put "/news/:id/like" do
    begin
      id = params[:id]
      news = News.find_by(id: id)
      news.likes += 1
      news.save
      "Liked!".to_json
    rescue => e
      [422, { message: e.message }].to_json
    end
  end 
  
post "/news/:id/comment/create" do
  begin
    @data = JSON.parse(request.body.read) if !request.body.read.empty?
    id = params[:id]
    new_comment = Comment.create(comment: @data['comment'], news_id: id)
    "Done".to_json
  rescue => e
    [422, { message: e.message }].to_json
  end
end

delete "/news/:id/comment/delete" do
  begin
    @data = JSON.parse(request.body.read) if !request.body.read.empty?
      Comment.destroy_by(id: params[:id])
      "Comment deleted".to_json
    rescue => e
      [422, { message: e.message }].to_json
    end
  end
end
