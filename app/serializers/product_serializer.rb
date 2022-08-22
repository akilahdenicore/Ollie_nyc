class ProductSerializer < ActiveModel::Serializer
  attributes :id, :product, :description, :price

  has_many :reviews
end
