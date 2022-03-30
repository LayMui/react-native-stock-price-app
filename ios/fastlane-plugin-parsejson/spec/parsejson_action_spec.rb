describe Fastlane::Actions::ParsejsonAction do
  describe '#run' do
    it 'prints a message' do
      expect(Fastlane::UI).to receive(:message).with("The parsejson plugin is working!")

      Fastlane::Actions::ParsejsonAction.run(nil)
    end
  end
end
