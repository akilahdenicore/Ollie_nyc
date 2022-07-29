class CartItemsController < ApplicationController

    
    # Implementing the below line of code when looking at data in Postman
    skip_before_action :authorize
    
    def index 
        render json: CartItem.all
    end

    def show 
        cart_item = CartItem.find(params[:id])
        render json: cart_item
    end 

    def create 
        cart_item = CartItem.create!(cart_item_params)
        render json: cart_item, status: :created
    end

    def destroy 
        cart_item = CartItem.find(params[:id])
        cart_item.destroy
        render json: {}
    end

    def update
        cart_item = CartItem.find(params[:id])
        cart_item.update!(update_cart_item_params)
        render json: cart_item, status: :ok
    end

    private 

    def cart_item_params 
        params.permit(:quantity, :menu_item_id, :cart_id) 
    end

    def update_cart_item_params 
        # params.permit(:item_name, :description, :price)
        params.permit(:quantity)
    end

    
end


