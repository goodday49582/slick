function specsAssetsTemplateXML(specs,context){
	
	Describe('Slick Selector Engine on XML file',function(){
		
		function makeSlickTestSearch(selector, count, disableQSA) {
			return function(){
				context.Slick.disableQSA = !!disableQSA;
				value_of( context.Slick(context.document, selector).length ).should_be( count );
				delete context.Slick.disableQSA;
			};
		}
		function it_should_find(count,selector){
			if (global.document.querySelectorAll)
				specs['should find '+count+' `'+selector+'` with    QSA' ] = makeSlickTestSearch(selector, count, false);
			specs['should find '+count+' `'+selector+'` without QSA' ] = makeSlickTestSearch(selector, count, true);
		};
		
		it_should_find(1, 'HTML');
		it_should_find(1, '#id_idnode');
		it_should_find(1, '[id=id_idnode]');
		it_should_find(3, '.class_classNode');
		it_should_find(3, '[class=class_classNode]');
		it_should_find(0, '[className=class_classNode]');
		it_should_find(3, 'camelCasedTag');
		
	});
	
};