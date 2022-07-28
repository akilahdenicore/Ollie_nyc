class Order < ApplicationRecord
  belongs_to :user_id
  has_many :line_items, dependent: :destroy
end
