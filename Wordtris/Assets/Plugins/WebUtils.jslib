var LibraryGLClear = {
	OnGameStarted: function(){
		window.dispatchReactUnityEvent(
		  "OnGameStarted"
		);
	},
	OnGameOver: function(score){
		window.dispatchReactUnityEvent(
			"OnGameOver",
			score
		);
	},
	OnBackButtonClicked: function(){
		window.dispatchReactUnityEvent(
			"OnBackButtonClicked",
		);
	}
};
mergeInto(LibraryManager.library, LibraryGLClear); 
