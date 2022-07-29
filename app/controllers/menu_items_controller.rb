class MenuItemsController < ApplicationController
    
    # Implementing the below line of code when looking at data in Postman
    skip_before_action :authorize
    
    def index 
        render json: MenuItem.all
    end

    def show 
        menu_item = MenuItem.find(params[:id])
        render json: menu_item
    end 

    def create 
        menu_item = MenuItem.create!(menu_item_params)
        render json: menu_item, status: :created
    end

    def destroy 
        menu_item = MenuItem.find(params[:id])
        menu_item.destroy
        render json: {}
    end

    def update
        menu_item = MenuItem.find(params[:id])
        menu_item.update!(update_menu_item_params)
        render json: menu_item, status: :ok
    end

    private 

    def menu_item_params 
        params.permit(:item_name, :description, :price, :image_url) 
    end

    def update_menu_item_params 
        # params.permit(:item_name, :description, :price)
        params.permit(:image_url)
    end

    
end
