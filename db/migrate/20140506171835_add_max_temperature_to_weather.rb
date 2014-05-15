class AddMaxTemperatureToWeather < ActiveRecord::Migration
  def change
  	add_column :weathers, :max_temperature, :float
  end
end
