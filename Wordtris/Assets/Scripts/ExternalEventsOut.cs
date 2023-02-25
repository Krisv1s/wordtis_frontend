using System.Runtime.InteropServices;

public static class ExternalEventsOut
{
    [DllImport("__Internal")]
    private static extern void OnGameStarted();
    [DllImport("__Internal")]
    private static extern void OnGameOver(int score);
    [DllImport("__Internal")]
    private static extern void OnBackButtonClicked();

    public static void GameStarted()
    {
#if UNITY_WEBGL && ! UNITY_EDITOR
        OnGameStarted();
#endif
    }

    public static void GameOver(int score)
    {
#if UNITY_WEBGL && ! UNITY_EDITOR
        OnGameOver(score);
#endif
    }

    public static void BackButtonClicked()
    {
#if UNITY_WEBGL && ! UNITY_EDITOR
        OnBackButtonClicked();
#endif
    }
}
