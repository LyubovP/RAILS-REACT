class Recipe < ApplicationRecord
  belongs_to :user, optional: true
  validates :title, :description, :instruction, presence: true

  enum category: { Drink: 0, Appetizer: 1, Breakfast: 2, Lunch: 3, Dinner: 4, Dessert: 5}

  before_create -> (recipe) do
    recipe.slug = recipe.title.parameterize
  end

  private
  def set_defaults
    self.category  ||= 0
  end
end