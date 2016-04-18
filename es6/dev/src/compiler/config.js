import { isBlank } from 'angular2/src/facade/lang';
import { unimplemented } from 'angular2/src/facade/exceptions';
import { Identifiers } from './identifiers';
export class CompilerConfig {
    constructor(genDebugInfo, logBindingUpdate, useJit, renderTypes = null) {
        this.genDebugInfo = genDebugInfo;
        this.logBindingUpdate = logBindingUpdate;
        this.useJit = useJit;
        if (isBlank(renderTypes)) {
            renderTypes = new DefaultRenderTypes();
        }
        this.renderTypes = renderTypes;
    }
}
/**
 * Types used for the renderer.
 * Can be replaced to specialize the generated output to a specific renderer
 * to help tree shaking.
 */
export class RenderTypes {
    get renderer() { return unimplemented(); }
    get renderText() { return unimplemented(); }
    get renderElement() { return unimplemented(); }
    get renderComment() { return unimplemented(); }
    get renderNode() { return unimplemented(); }
    get renderEvent() { return unimplemented(); }
}
export class DefaultRenderTypes {
    constructor() {
        this.renderer = Identifiers.Renderer;
        this.renderText = null;
        this.renderElement = null;
        this.renderComment = null;
        this.renderNode = null;
        this.renderEvent = null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC15N01zR2lVNC50bXAvYW5ndWxhcjIvc3JjL2NvbXBpbGVyL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLDBCQUEwQjtPQUN6QyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdDQUFnQztPQUNyRCxFQUFDLFdBQVcsRUFBQyxNQUFNLGVBQWU7QUFHekM7SUFFRSxZQUFtQixZQUFxQixFQUFTLGdCQUF5QixFQUN2RCxNQUFlLEVBQUUsV0FBVyxHQUFnQixJQUFJO1FBRGhELGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFTO1FBQ3ZELFdBQU0sR0FBTixNQUFNLENBQVM7UUFDaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixXQUFXLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3pDLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSDtJQUNFLElBQUksUUFBUSxLQUFnQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLElBQUksVUFBVSxLQUFnQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLElBQUksYUFBYSxLQUFnQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFFLElBQUksYUFBYSxLQUFnQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFFLElBQUksVUFBVSxLQUFnQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLElBQUksV0FBVyxLQUFnQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUFFRDtJQUFBO1FBQ0UsYUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7QUFBRCxDQUFDO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge3VuaW1wbGVtZW50ZWR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge0lkZW50aWZpZXJzfSBmcm9tICcuL2lkZW50aWZpZXJzJztcbmltcG9ydCB7Q29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YX0gZnJvbSAnLi9jb21waWxlX21ldGFkYXRhJztcblxuZXhwb3J0IGNsYXNzIENvbXBpbGVyQ29uZmlnIHtcbiAgcHVibGljIHJlbmRlclR5cGVzOiBSZW5kZXJUeXBlcztcbiAgY29uc3RydWN0b3IocHVibGljIGdlbkRlYnVnSW5mbzogYm9vbGVhbiwgcHVibGljIGxvZ0JpbmRpbmdVcGRhdGU6IGJvb2xlYW4sXG4gICAgICAgICAgICAgIHB1YmxpYyB1c2VKaXQ6IGJvb2xlYW4sIHJlbmRlclR5cGVzOiBSZW5kZXJUeXBlcyA9IG51bGwpIHtcbiAgICBpZiAoaXNCbGFuayhyZW5kZXJUeXBlcykpIHtcbiAgICAgIHJlbmRlclR5cGVzID0gbmV3IERlZmF1bHRSZW5kZXJUeXBlcygpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlclR5cGVzID0gcmVuZGVyVHlwZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBUeXBlcyB1c2VkIGZvciB0aGUgcmVuZGVyZXIuXG4gKiBDYW4gYmUgcmVwbGFjZWQgdG8gc3BlY2lhbGl6ZSB0aGUgZ2VuZXJhdGVkIG91dHB1dCB0byBhIHNwZWNpZmljIHJlbmRlcmVyXG4gKiB0byBoZWxwIHRyZWUgc2hha2luZy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlbmRlclR5cGVzIHtcbiAgZ2V0IHJlbmRlcmVyKCk6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEgeyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9XG4gIGdldCByZW5kZXJUZXh0KCk6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEgeyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9XG4gIGdldCByZW5kZXJFbGVtZW50KCk6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEgeyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9XG4gIGdldCByZW5kZXJDb21tZW50KCk6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEgeyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9XG4gIGdldCByZW5kZXJOb2RlKCk6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEgeyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9XG4gIGdldCByZW5kZXJFdmVudCgpOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhIHsgcmV0dXJuIHVuaW1wbGVtZW50ZWQoKTsgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdFJlbmRlclR5cGVzIGltcGxlbWVudHMgUmVuZGVyVHlwZXMge1xuICByZW5kZXJlciA9IElkZW50aWZpZXJzLlJlbmRlcmVyO1xuICByZW5kZXJUZXh0ID0gbnVsbDtcbiAgcmVuZGVyRWxlbWVudCA9IG51bGw7XG4gIHJlbmRlckNvbW1lbnQgPSBudWxsO1xuICByZW5kZXJOb2RlID0gbnVsbDtcbiAgcmVuZGVyRXZlbnQgPSBudWxsO1xufVxuIl19