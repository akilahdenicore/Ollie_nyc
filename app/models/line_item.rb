class LineItem < ApplicationRecord
  belongs_to :menu_item_id
  belongs_to :cart_id
  belongs_to :order_id

  def total_price
    self.quantity * self.menu_item.price
  end

  
end
