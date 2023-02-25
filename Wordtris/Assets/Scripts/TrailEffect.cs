using UnityEngine;

namespace WordTris.Effects
{
    [RequireComponent(typeof(TrailRenderer))]
    public class TrailEffect : MonoBehaviour
    {
        [SerializeField] private Camera _camera;

        private TrailRenderer _trailRenderer;

        private void Awake()
        {
            _trailRenderer = GetComponent<TrailRenderer>();
        }

        private void Update()
        {
            if (UnityEngine.Input.GetMouseButtonDown(0))
            {
                _trailRenderer.Clear();
            }

            if (UnityEngine.Input.GetMouseButton(0))
            {
                var position = _camera.ScreenToWorldPoint(UnityEngine.Input.mousePosition - Vector3.forward * _camera.transform.position.z);
                transform.position = position;
            }
        }
    }
}
