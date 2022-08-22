class ProductsController < ApplicationController
    
    # Implementing the below line of code when looking at data in Postman
    # skip_before_action :authorize
    
    def index 
        render json: Product.all
    end

    def show 
        product = Product.find(params[:id])
        render json: product
    end 

    def create 
        product = Product.create!(product_params)
        render json: product, status: :created
    end

    def destroy 
        product = Product.find(params[:id])
        product.destroy
        render json: {}
    end

    def update
        product = Product.find(params[:id])
        product.update!(update_product_params)
        render json: product, status: :ok
    end

    private 

    def product_params 
        params.permit(:product, :description, :price ) 
    end

    def update_product_params 
        # params.permit(:item_name, :description, :price)
        params.permit(:image_url)
    end

    
end
