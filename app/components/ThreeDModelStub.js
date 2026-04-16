export default function ThreeDModelStub({ title = "Shared 3D Model Surface" }) {
  return (
    <section className="model3d-stub" aria-label="3D model placeholder">
      <div className="model3d-stub-head">
        <p className="brief-kicker">3D Module</p>
        <p className="model3d-stub-title">{title}</p>
      </div>
      <div className="model3d-stub-canvas" role="img" aria-label="3D viewer stub">
        <span className="model3d-stub-ring model3d-stub-ring-a" />
        <span className="model3d-stub-ring model3d-stub-ring-b" />
        <span className="model3d-stub-core">3D</span>
      </div>
      <div className="model3d-stub-tags">
        <span>Vascular</span>
        <span>Muscular</span>
        <span>Danger</span>
        <span>Ultrasound</span>
      </div>
    </section>
  );
}
