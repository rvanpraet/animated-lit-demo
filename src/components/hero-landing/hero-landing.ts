import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import gsap from 'gsap';
import styles from '../../styles/hero-landing.scss?inline';
import vertShaderSource from '../../shaders/gradient.vert?raw';
import fragShaderSource from '../../shaders/gradient.frag?raw';

/**
 * HeroLanding Component
 *
 * A full-viewport hero section featuring a high-performance WebGL background
 * and GSAP-powered entrance animations.
 *
 * The background renders a custom GLSL shader (`gradient.frag`) via native WebGL.
 * The title and slotted content are animated using GSAP timelines.
 *
 * @element hero-landing
 *
 * @slot - The default slot is intended for a list of `animated-card` elements, which will be staggered in.
 */
@customElement('hero-landing')
export class HeroLanding extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  /**
   * The main headline text to display in the hero center.
   */
  @property({ type: String }) title = 'Welcome';

  @query('canvas') canvas!: HTMLCanvasElement;
  @query('.hero-landing__title') titleElement!: HTMLElement;
  @query('slot') slotElement!: HTMLSlotElement;

  private gl: WebGLRenderingContext | null = null;
  private program: WebGLProgram | null = null;
  private startTime: number = 0;
  private animationFrameId: number | null = null;

  /**
   * Renders the hero section structure, including the canvas and content container.
   */
  render() {
    return html`
      <div class="hero-landing">
        <canvas class="hero-landing__background"></canvas>
        <div class="hero-landing__content">
          <h1 class="hero-landing__title">${this.title}</h1>
          <div class="hero-landing__cards">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Lifecycle callback. Initializes WebGL and starts animations after the first render.
   */
  firstUpdated() {
    this.initWebGL();
    this.initAnimations();
    window.addEventListener('resize', this.onResize);
  }

  /**
   * Lifecycle callback. Cleans up animation frames and event listeners.
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onResize);
  }

  /**
   * Initializes GSAP animations for the title and slotted content.
   */
  private initAnimations() {
    // Animate Title
    gsap.to(this.titleElement, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2
    });

    // Animate Slotted Cards
    const assignedNodes = this.slotElement.assignedElements();
    if (assignedNodes.length > 0) {
      gsap.to(assignedNodes, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 0.6
      });
    }
  }

  // --- WebGL Setup (Boilerplate-ish) ---

  /**
   * Sets up the WebGL context, shaders, and buffers.
   */
  private initWebGL() {
    this.gl = this.canvas.getContext('webgl');
    if (!this.gl) return;

    this.resizeCanvas();

    const vertShader = this.createShader(this.gl.VERTEX_SHADER, vertShaderSource);
    const fragShader = this.createShader(this.gl.FRAGMENT_SHADER, fragShaderSource);
    
    if (!vertShader || !fragShader) return;

    this.program = this.createProgram(vertShader, fragShader);
    if (!this.program) return;

    this.gl.useProgram(this.program);

    // Set up full screen quad
    const positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ];
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);

    const positionAttributeLocation = this.gl.getAttribLocation(this.program, 'position');
    this.gl.enableVertexAttribArray(positionAttributeLocation);
    this.gl.vertexAttribPointer(positionAttributeLocation, 2, this.gl.FLOAT, false, 0, 0);

    this.startTime = performance.now();
    this.renderLoop();
  }

  /**
   * The main animation loop for the WebGL background.
   * Updates uniforms and redraws the scene.
   */
  private renderLoop = () => {
    if (!this.gl || !this.program) return;

    const time = (performance.now() - this.startTime) / 1000;
    
    const timeLocation = this.gl.getUniformLocation(this.program, 'uTime');
    const resolutionLocation = this.gl.getUniformLocation(this.program, 'uResolution');

    this.gl.uniform1f(timeLocation, time);
    this.gl.uniform2f(resolutionLocation, this.canvas.width, this.canvas.height);

    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

    this.animationFrameId = requestAnimationFrame(this.renderLoop);
  };

  /**
   * compiles a WebGL shader from source.
   * @param type - The type of shader (VERTEX_SHADER or FRAGMENT_SHADER).
   * @param source - The GLSL source code.
   */
  private createShader(type: number, source: string) {
    if (!this.gl) return null;
    
    const shader = this.gl.createShader(type);
    if (!shader) return null;

    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    // Check if the shader compiled successfully. If not, log the error and clean up.
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.error(this.gl.getShaderInfoLog(shader));
      this.gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  /**
   * Links a WebGL program from vertex and fragment shaders.
   * @param vert - The compiled vertex shader.
   * @param frag - The compiled fragment shader.
   */
  private createProgram(vert: WebGLShader, frag: WebGLShader) {
    if (!this.gl) return null;
    
    const program = this.gl.createProgram();
    if (!program) return null;

    this.gl.attachShader(program, vert);
    this.gl.attachShader(program, frag);
    this.gl.linkProgram(program);

    // Check if the WebGL program linked successfully. If not, log the error and clean up.
    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      console.error(this.gl.getProgramInfoLog(program));
      this.gl.deleteProgram(program);
      return null;
    }

    return program;
  }

  /**
   * Handles window resize events.
   */
  private onResize = () => {
    this.resizeCanvas();
  };

  /**
   * Resizes the canvas to match the window size, accounting for device pixel ratio.
   */
  private resizeCanvas() {
    if (!this.canvas || !this.gl) return;

    // Handle Retina displays
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hero-landing': HeroLanding;
  }
}
