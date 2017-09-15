class Api::PostsController < ApplicationController
  # belongs_to :user

  def index
    render json: Post.all.to_json( only: [:id, :title])
  end

  def create
    attrs = params.permit(:title, :img)
    tweet = posts.new(attrs)

    if tweet.save
      render json: {
        id.tweer.id,
        title: tweet.title,
        img_url: tweet.img_url
      }
    else
      render json: { errors: tweet.errors.full_messages }, status: 422
    end
  end

  def destroy
    posts.find(params[:id]).destroy
  end
end
