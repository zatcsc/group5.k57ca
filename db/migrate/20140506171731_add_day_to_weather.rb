class AddDayToWeather < ActiveRecord::Migration
  def change
  	add_column :weathers, :day, :string
  end
end
