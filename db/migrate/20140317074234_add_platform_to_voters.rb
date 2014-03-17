class AddPlatformToVoters < ActiveRecord::Migration
  def change
    add_column :voters, :platform, :integer
  end
end
