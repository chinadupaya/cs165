class CreateConditions < ActiveRecord::Migration[5.2]
  def change
    create_table :conditions do |t|
      t.string :condition
      t.text :description

      t.timestamps
    end
  end
end
