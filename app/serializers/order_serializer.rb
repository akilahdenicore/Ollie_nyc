class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_status, :total
  has_one :user
  has_one :cart
end
