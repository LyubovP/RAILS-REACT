class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image
      t.text :description
      t.text :instruction
      t.integer :category, default: 0
      t.integer :user_id

      t.timestamps
    end
  end
end
