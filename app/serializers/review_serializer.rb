class ReviewSerializer < ActiveModel::Serializer
    attributes :rating, :product_review, :product_id, :user_id
end
