class CreateLicenses < ActiveRecord::Migration[5.2]
  def change
    create_table :licenses do |t|
      t.string :license_num
      t.integer :restriction_code
      t.string :application_type
      t.string :license_type
      t.string :skill_acquire
      t.string :conditions
      t.string :eval_name
      t.string :organ_donor

      t.timestamps
    end
  end
end
