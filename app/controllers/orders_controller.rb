class OrdersController < ApplicationController

    def index
        @orders = Order.all
        render json: @orders
      end
    
      def show
        @order = Order.find(params[:id])
        render json: @order

      end

     def create
        @order = Order.new(order_params)
        @current_cart.line_items.each do |item|
          @order.line_items << item
          item.cart_id = nil
        end
        @order.save
        Cart.destroy(session[:cart_id])
        session[:cart_id] = nil
        render json: @order, :status :created
      end
    



      
private
    def order_params
        params.require(:order).permit(:name, :email, :address, :order_status, :user_id)
        # is require necessary?
    end

end
