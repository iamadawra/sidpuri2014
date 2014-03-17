class AddPlatformToVoters < ActiveRecord::Migration
  def change
    add_column :voters, :platform, :intger
  end
end
