class CreateVoters < ActiveRecord::Migration
  def change
    create_table :voters do |t|
      t.string :ip

      t.timestamps
    end
  end
end
