class ReviewsController < ApplicationController
# Implementing the below line of code when looking at data in Postman
    skip_before_action :authorize, only: :index
    
    def index 
        render json: Review.all
    end

    def show 
        review = Review.find(params[:id])
        render json: review
    end 

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy 
        review = Review.find(params[:id])
        review.destroy
        render json: {}
    end

    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :ok
    end

    private 

    def review_params 
        params.permit(:rating, :product_review, :product_id, :user_id)
    end

    def update_review_params 
        params.permit(:rating, :product_review, :product_id, :user_id)
    end
end