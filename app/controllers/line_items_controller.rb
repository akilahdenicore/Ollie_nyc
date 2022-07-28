class LineItemsController < ApplicationController
   
    
      def create
        #find associated menu_item and current cart
        chosen_product = MenuItem.find(params[:menu_item_id])
        current_cart = @current_cart
    
        if current_cart.menu_items.include?(chosen_product)
          @line_item = current_cart.line_items.find_by(:menu_item_id => chosen_product)
          @line_item.quantity += 1
        else
          @line_item = LineItem.new
          @line_item.cart = current_cart
          @line_item.menu_item = chosen_product
        end
          # Save and redirect to cart show path
         @line_item.save
         render json: current_cart, status: :created

      end
      # find line_item then increment/decrement, save and redirect to cart show page
        def add_quantity
            @line_item = LineItem.find(params[:id])
            @line_item.quantity += 1
            @line_item.save
            render json: current_cart, status: :ok
        end

        def reduce_quantity
            @line_item = LineItem.find(params[:id])
            if @line_item.quantity > 1
              @line_item.quantity -= 1
            end
            @line_item.save
            render json: current_cart, status: :ok
        end
          
    
    
    # Find the current LineItem, destroy and redirect back to cart
      def destroy
        @line_item = LineItem.find(params[:id])
        @line_item.destroy
        render json: {}

        # redirect_to cart_path(@current_cart)    
      end  
    
    
    private
      def line_item_params
        params.require(:line_item).permit(:quantity,:product_id, :cart_id)
    
      end
end
