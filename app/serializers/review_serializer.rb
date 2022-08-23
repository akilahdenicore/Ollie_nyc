class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :rating, :product_review, :product_id, :user_id
end
