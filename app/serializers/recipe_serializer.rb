class RecipeSerializer
  include JSONAPI::Serializer
  attributes :title, :image, :description, :instruction, :category, :user_id
  belongs_to :user
end
