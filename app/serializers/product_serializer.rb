class ProductSerializer < ActiveModel::Serializer
  attributes :id, :product, :description, :price
end
