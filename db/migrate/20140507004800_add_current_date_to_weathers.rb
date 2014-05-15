class AddCurrentDateToWeathers < ActiveRecord::Migration
  def change
  	add_column :weathers, :current_date, :date
  end
end
