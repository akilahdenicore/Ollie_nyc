class CartsController < ApplicationController
     
    # Implementing the below line of code when looking at data in Postman
    skip_before_action :authorize
    
    def index 
        render json: Cart.all
    end

    def show 
        cart = Cart.find(params[:id])
        render json: cart, include: ['cart_items', 'cart_items.menu_item']
    end 

    def create 
        cart = Cart.create!(cart_params)
        render json: cart, status: :created
    end

    def destroy 
        cart = Cart.find(params[:id])
        cart.destroy
        render json: {}
    end

    def update
        cart = Cart.find(params[:id])
        cart.update!(update_cart_params)
        render json: cart, status: :ok
    end

    private 

    def cart_params 
        params.permit(:user_id) 
    end

end
