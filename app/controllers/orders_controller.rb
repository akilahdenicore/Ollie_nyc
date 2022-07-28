class OrdersController < ApplicationController

    # Implementing the below line of code when looking at data in Postman
    # skip_before_action :authorize
    
    def index 
        render json: Order.all
    end

    def show 
        order = Order.find(params[:id])
        render json: order
    end 

    def create 
        order = Order.create!(menu_item_params)
        render json: order, status: :created
    end

    def destroy 
        order = Order.find(params[:id])
        order.destroy
        render json: {}
    end

    def update
        order = Order.find(params[:id])
        order.update!(update_order_params)
        render json: order, status: :ok
    end

    private 

    def order_params 
        params.permit(:order_status, :total, :user_id, :cart_id )
    end

    def update_order_params 
        params.permit(:order_status, :total, :user_id, :cart_id)
    end
end
