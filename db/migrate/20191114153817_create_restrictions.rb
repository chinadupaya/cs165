class CreateRestrictions < ActiveRecord::Migration[5.2]
  def change
    create_table :restrictions do |t|
      t.integer :code
      t.text :meaning

      t.timestamps
    end
  end
end
