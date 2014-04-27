class CreateJams < ActiveRecord::Migration
  def change
    create_table :jams do |t|
      t.float :latitude
      t.float :longtitude

      t.timestamps
    end
  end
end
