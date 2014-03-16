class AddEmailToPlatforms < ActiveRecord::Migration
  def change
    add_column :platforms, :email, :string
  end
end
