class AddOrganizationToPlatforms < ActiveRecord::Migration
  def change
    add_column :platforms, :organization, :string
  end
end
