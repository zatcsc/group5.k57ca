#=require map
describe 'test MapOption function', ->
	it 'should be a function', ->
		expect(MapOption).to.be.a('function');
	it 'should work correctly', ->
		mapOption = new MapOption(HANOI_COORDINATE,ROADMAP);  
		expect(mapOption).to.be.an('object');
		
	  
	  

