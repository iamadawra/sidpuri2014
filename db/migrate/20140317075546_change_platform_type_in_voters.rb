class ChangePlatformTypeInVoters < ActiveRecord::Migration
  def up
  	change_table :voters do |t|
      t.change :platform, :text
    end
  end

  def down
  	change_table :voters do |t|
      t.change :platform, :integer
    end
  end
end
