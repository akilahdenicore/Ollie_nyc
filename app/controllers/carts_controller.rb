class CartsController < ApplicationController
    def show
        render json: = @current_cart
    end

    def destroy
        @cart = @current_cart
        @cart.destroy
        sesssion[:cart_id] = nil
        render json: = @current_cart
    end
end
