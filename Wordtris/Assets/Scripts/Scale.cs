using UnityEngine;

namespace WordTris
{
    public class Scale : MonoBehaviour
    {
        private const float MaxLetterSize = 1f;
        private const float LettersSpacing = 0.05f;
        private const float ScreenSpacing = 0.15f;

        [SerializeField] private Vector2Int _boardSize;
        [SerializeField] private Transform _boardBorder;
        [SerializeField] private Transform[] _spawnPoints;
        [SerializeField] private Transform _loseZone;

        private float _scaleFactor;

        private void Awake()
        {
            float aspectRatio = (float)Screen.width / Screen.height;
            float height = Camera.main.orthographicSize * 2;
            float width = height * aspectRatio - ScreenSpacing * 2;

            _scaleFactor = Mathf.Min(width / _boardSize.x, height / _boardSize.y, MaxLetterSize);

            PlaceSpawnPoints();
            PlaceLoseZone();
        }

        public float ScaleFactor => _scaleFactor;
        public Vector3 LetterScale => Vector3.one * _scaleFactor;

        private void PlaceSpawnPoints()
        {
            float startX = -(LettersSpacing + _scaleFactor) * (_spawnPoints.Length / 2);
            float x = startX;

            for (int i = 0; i < _spawnPoints.Length; i++)
            {
                _spawnPoints[i].position = new Vector3(x, _spawnPoints[i].position.y, _spawnPoints[i].position.z);
                x += _scaleFactor + LettersSpacing;
            }
        }

        private void PlaceLoseZone()
        {
            float startY = _boardBorder.position.y + _boardBorder.localScale.y / 2;
            float offset = _scaleFactor / 2;
            float y = startY + _boardSize.y * _scaleFactor + offset;
            _loseZone.transform.position = new Vector3(_loseZone.transform.position.x, y, _loseZone.transform.position.z);
        }
    }
}
