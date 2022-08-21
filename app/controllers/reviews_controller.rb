class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :review_not_found 
rescue_from ActiveRecord::RecordInactive, with: :review_request_invalid
    
    before_action :authorize 

    def index 
        reviews = Review.all 
        render json: reviews
    end

    def show
        review = find_review 
        render json: review 
    end

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created 
    end

    def update 
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :updated
    end

    def destroy 
        review = Review.find(params[:id]) 

        if review.destroy
        head :no_content 
        else 
          render json:  { error: review.errors.messages}, status: 422
    end

    private

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def review_params
        params.require(:review).permit(:rating, :product_review, :user, :product_id)
    end

    def review_not_found
        render json: { error: "Review not found" }, status: :not_found
    end

    def review_request_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def find_review
        Review.find(params[:id])
    end

end
end
