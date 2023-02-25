using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using WordTris;

public class ExternalEventsIn : MonoBehaviour
{
    [SerializeField] private Board _board;
    [SerializeField] private LoseZone _lozeZone;
    [SerializeField] private Score _score;
    [SerializeField] private Button _backButton;

    private void OnEnable()
    {
        _lozeZone.GameOver += OnGameOverInternal;
        _backButton.onClick.AddListener(OnBackButtonClickedInternal);
    }

    private void OnDisable()
    {
        _lozeZone.GameOver -= OnGameOverInternal;
        _backButton.onClick.RemoveListener(OnBackButtonClickedInternal);
    }

    private void Start()
    {
        OnGameStartdeInternal();
    }

    public void Restart()
    {
        SceneManager.LoadScene(0);
    }

    private void OnBackButtonClickedInternal()
    {
        ExternalEventsOut.BackButtonClicked();
    }

    private void OnGameStartdeInternal()
    {
        ExternalEventsOut.GameStarted();
    }

    private void OnGameOverInternal()
    {
        _board.enabled = false;
        int score = _score.TotalScore;
        ExternalEventsOut.GameOver(score);
    }
}
